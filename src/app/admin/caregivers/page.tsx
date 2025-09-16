"use client";
import React, { useEffect, useState } from "react";
import {
  initFirebase,
  auth as getAuth,
  db as getDb,
  signInWithGoogleAuto,
} from "../../../lib/firebaseClient";
import { collection, getDocs, DocumentData } from "firebase/firestore";

const ADMIN_EMAIL = "krunalkishortote@gmail.com";

type Caregiver = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  status?: string;
  [k: string]: unknown;
};

export default function AdminCaregiversPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Record<string, unknown>>({});

  useEffect(() => {
    initFirebase();
    const a = getAuth();
    const unsub = a.onAuthStateChanged((u) => {
      setUserEmail(u?.email ?? null);
      if (u?.email === ADMIN_EMAIL) {
        loadCaregivers();
      }
    });
    return () => unsub();
  }, []);

  async function ensureSignedIn() {
    const a = getAuth();
    if (!a.currentUser) {
      // Use redirect/popup auto helper for mobile/desktop
      await signInWithGoogleAuto();
      return;
    }
  }

  async function loadCaregivers() {
    setLoading(true);
    try {
      const database = getDb();
      const snap = await getDocs(collection(database, "caregivers"));
      const docs: Caregiver[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as DocumentData),
      }));
      setCaregivers(docs);
    } catch (e) {
      console.error("Failed to load caregivers", e);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateStatus(id: string, status: string) {
    try {
      const a = getAuth();
      if (!a.currentUser) {
        await ensureSignedIn();
      }
      const token = await a.currentUser!.getIdToken();
      const res = await fetch("/api/admin/updateStatus", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json();
      if (json.ok) {
        setCaregivers((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status } : c))
        );
      } else {
        console.error(json);
        alert("Failed to update status: " + (json.message || "unknown"));
      }
    } catch (e) {
      console.error(e);
      alert("Failed to update status");
    }
  }

  function startEdit(c: Caregiver) {
    setEditingId(c.id);
    setEditData({
      name: c.name || "",
      phone: c.phone || "",
      city: c.city || "",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditData({});
  }

  async function submitEdit(id: string) {
    try {
      const a = getAuth();
      if (!a.currentUser) {
        await ensureSignedIn();
      }
      const token = await a.currentUser!.getIdToken();
      const res = await fetch("/api/admin/updateCaregiver", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, data: editData }),
      });
      const json = await res.json();
      if (json.ok) {
        setCaregivers((prev) =>
          prev.map((c) => (c.id === id ? { ...c, ...editData } : c))
        );
        cancelEdit();
      } else {
        console.error(json);
        alert("Failed to save changes: " + (json.message || "unknown"));
      }
    } catch (e) {
      console.error(e);
      alert("Failed to save changes");
    }
  }

  if (userEmail && userEmail !== ADMIN_EMAIL) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Admin area</h2>
        <p>
          Signed in as {userEmail}. You are not authorized to view this page.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Caregiver Submissions (Admin)</h2>
      {!userEmail && (
        <div>
          <p>Please sign in with the admin Google account to continue.</p>
          <button
            onClick={async () => {
              await ensureSignedIn();
            }}
          >
            Sign in with Google
          </button>
        </div>
      )}

      {userEmail === ADMIN_EMAIL && (
        <div>
          <p>Welcome, admin ({ADMIN_EMAIL}).</p>
          <button onClick={loadCaregivers} disabled={loading}>
            Refresh
          </button>

          {loading && <p>Loading...</p>}

          {!loading && caregivers.length === 0 && <p>No submissions found.</p>}

          <ul style={{ listStyle: "none", padding: 0 }}>
            {caregivers.map((c) => (
              <li
                key={c.id}
                style={{
                  border: "1px solid #ddd",
                  padding: 12,
                  margin: "8px 0",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <strong>{c.name || c.email || c.id}</strong>
                    <div>{c.email}</div>
                    <div>Phone: {c.phone || "-"}</div>
                    <div>Status: {c.status || "pending"}</div>
                    {typeof c.certificateUrl === "string" &&
                      c.certificateUrl && (
                        <div className="text-xs">
                          Certificate:{" "}
                          <a
                            href={c.certificateUrl as string}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        </div>
                      )}
                    {typeof c.policeDoc === "string" && c.policeDoc && (
                      <div className="text-xs">
                        Police doc:{" "}
                        <a
                          href={c.policeDoc as string}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                        </a>
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() => handleUpdateStatus(c.id, "approved")}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(c.id, "rejected")}
                    >
                      Reject
                    </button>
                    {!editingId && (
                      <button onClick={() => startEdit(c)}>Edit</button>
                    )}
                  </div>
                </div>

                {editingId === c.id && (
                  <div style={{ marginTop: 8 }}>
                    <label>
                      Name:{" "}
                      <input
                        value={
                          typeof editData.name === "string" ? editData.name : ""
                        }
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </label>
                    <label style={{ marginLeft: 8 }}>
                      Phone:{" "}
                      <input
                        value={
                          typeof editData.phone === "string"
                            ? editData.phone
                            : ""
                        }
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                      />
                    </label>
                    <div style={{ marginTop: 8 }}>
                      <button onClick={() => submitEdit(c.id)}>Save</button>
                      <button onClick={cancelEdit} style={{ marginLeft: 8 }}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
