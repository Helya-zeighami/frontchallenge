import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface CreateButtonProps {
  onClick?: () => void; 
}

const CreateButton: React.FC<CreateButtonProps> = () => {
    const router = useRouter();
    const [formData, setFormData] = useState("");
    const [showForm, setShowForm] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await fetch(`http://localhost:3500/users`, {
        method: "POST",
        body: JSON.stringify({ name: formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.refresh();
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(e.target.value);
    };
  
    return (
      <div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
        >
          Create
        </button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={formData}
              onChange={handleChange}
              placeholder="Enter data"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  };
  
  export default CreateButton;