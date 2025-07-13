
"use client";

import { useEffect, useState } from "react";

interface Feedback {
  id: string;
  createdAt: string;
  query: string;
  sql: string;
  isExpected: boolean;
  reason: string | null;
}

export const FeedbackDisplay = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch("/api/feedback");
      if (response.ok) {
        const data = await response.json();
        setFeedback(data.feedback);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="p-4 border rounded text-sky-400 ">
            <p className="p-2"><strong>Query:</strong> {item.query}</p>
            <p className="p-2"><strong>SQL:</strong> {item.sql}</p>
            <p className={`p-2 ${item.isExpected ? 'text-green-500' : 'text-red-500'}`}>
              <strong>Was Expected:</strong> {item.isExpected ? "Yes" : "No"}
            </p>
            {item.reason && <p className="p-2"><strong>Reason:</strong> {item.reason}</p>}
            <p className="text-sm text-gray-500">{new Date(item.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
