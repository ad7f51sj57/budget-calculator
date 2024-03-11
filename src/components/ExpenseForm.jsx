import React from "react";

export default function ExpenseForm({
  handleSubmit,
  expenseName,
  setExpenseName,
  expenseCost,
  setExpenseCost,
  editEl,
}) {
  const handleChangeExpenseName = (e) => {
    setExpenseName(e.target.value);
  };

  const handleChangeExpenseCost = (e) => {
    setExpenseCost(e.target.value);
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-7">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="text-cyan-600 text-xl">
              {editEl ? "수정 항목" : "지출 항목"}
            </label>
            <input
              id="name"
              type="text"
              placeholder="항목 입력"
              className="text-lg bg-transparent outline-none border-b-2 border-slate-300 focus:border-slate-400 py-2"
              value={expenseName}
              onChange={handleChangeExpenseName}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="cost" className="text-cyan-600 text-xl">
              {editEl ? "수정 비용" : "지출 비용"}
            </label>
            <input
              id="cost"
              type="number"
              placeholder="비용 입력"
              className="text-lg bg-transparent outline-none border-b-2 border-slate-300 focus:border-slate-400 py-2"
              value={expenseCost}
              onChange={handleChangeExpenseCost}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-7 bg-lime-200 text-teal-900 rounded-md p-2 flex items-center gap-x-1 hover:shadow-lg hover:scale-105"
        >
          {editEl ? "저장" : "제출"}
          <span className="material-symbols-outlined">
            {editEl ? "save" : "send"}
          </span>
        </button>
      </form>
    </article>
  );
}
