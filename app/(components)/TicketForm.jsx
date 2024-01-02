"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submitted!");
  };

  const newTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Bug",
  };

  const [formData, setFormData] = useState(newTicketData);
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label htmlFor="">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Bug">🐛 Bug </option>
          <option value="Feature">💎 Feature</option>
          <option value="UI">⚡ User Interface</option>
          <option value="Project">🏴‍☠️ Project Planning</option>
          <option value="Graphics">💥 Graphics</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>
        <label htmlFor="">Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min={0}
            max={100}
            onChange={handleChange}
          />
        <label htmlFor="">Status</label>
        <select name="status" id="status" value={formData.status} onChange={handleChange}>
            <option value="not started">❗ Not Started ❗</option>
            <option value="in progress">🚧 In Progress 🚧</option>
            <option value="stuck">⚠️ Stuck/Blocked ⚠️</option>
            <option value="done">✅ Done ✅</option>
        </select>
        <input type="submit" className="btn" value={"Create Ticket"} />
      </form>
    </div>
  );
};

export default TicketForm;
