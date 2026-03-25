import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Mock API calls (replace with real endpoints later)
const fetchSettings = async () => {
  return {
    theme: "light",
    notifications: true,
    emailUpdates: false,
    language: "en",
    timezone: "Africa/Johannesburg",
  };
};

const updateSettings = async (newSettings) => {
  // simulate API
  return newSettings;
};

export default function SettingsPage() {
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: fetchSettings,
  });

  const mutation = useMutation({
    mutationFn: updateSettings,
    onSuccess: (data) => {
      queryClient.setQueryData(["settings"], data);
    },
  });

  const [localSettings, setLocalSettings] = useState(null);

  if (isLoading || !settings) return <div>Loading settings...</div>;

  const current = localSettings || settings;

  const handleChange = (key, value) => {
    setLocalSettings({ ...current, [key]: value });
  };

  const handleSave = () => {
    mutation.mutate(current);
    setLocalSettings(null);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Appearance */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-2">Appearance</h2>
        <select
          value={current.theme}
          onChange={(e) => handleChange("theme", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-2">Notifications</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={current.notifications}
            onChange={(e) => handleChange("notifications", e.target.checked)}
          />
          Enable Notifications
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={current.emailUpdates}
            onChange={(e) => handleChange("emailUpdates", e.target.checked)}
          />
          Email Updates
        </label>
      </div>

      {/* Localization */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-2">Localization</h2>
        <div className="flex gap-4">
          <select
            value={current.language}
            onChange={(e) => handleChange("language", e.target.value)}
            className="border p-2 rounded"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>

          <select
            value={current.timezone}
            onChange={(e) => handleChange("timezone", e.target.value)}
            className="border p-2 rounded"
          >
            <option value="Africa/Johannesburg">Africa/Johannesburg</option>
            <option value="UTC">UTC</option>
          </select>
        </div>
      </div>

      {/* Account */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-2">Account</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete Account
        </button>
      </div>

      {/* Save Button */}
      <div>
        <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
