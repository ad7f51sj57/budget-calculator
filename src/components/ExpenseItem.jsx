import React from "react";

export default function ExpenseItem({
  items,
  item,
  setItems,
  createMessage,
  setEditEl,
  setExpenseName,
  setExpenseCost,
}) {
  const handleDelete = () => {
    let newItem = items.filter((data) => data.id !== item.id);
    setItems(newItem);
    createMessage(true, "삭제되었습니다.");
  };

  const handleEdit = () => {
    setExpenseName(item.name);
    setExpenseCost(item.cost);
    setEditEl(item);
  };

  return (
    <div className="grid grid-cols-3 p-2 border-2 border-slate-200 rounded-md transition-all hover:scale-[1.02] hover:border-slate-300">
      <span>{item.name}</span>
      <span>{item.cost}</span>
      <div className="flex gap-x-2 justify-end">
        <button onClick={handleEdit} className="material-symbols-outlined">
          edit
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="material-symbols-outlined"
        >
          remove
        </button>
      </div>
    </div>
  );
}
