import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  items,
  setItems,
  totalExpense,
  handleAllRemove,
  createMessage,
  setEditEl,
  setExpenseName,
  setExpenseCost,
}) {
  return (
    <section>
      <div className="text-white p-5 bg-teal-900 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">EXPENSE LIST</h2>
        <button
          onClick={handleAllRemove}
          className={`text-xs ${
            items.length <= 0 ? "invisible" : "flex"
          } flex-col items-center`}
        >
          <span className="material-symbols-outlined">delete</span>
          ALL
        </button>
      </div>
      <div className="flex flex-col p-7">
        <div className="flex flex-col gap-y-3">
          <div className="text-lg text-cyan-600 grid grid-cols-3 p-b-2">
            <span>항목</span>
            <span>비용</span>
          </div>
          {items.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                items={items}
                item={expense}
                setItems={setItems}
                createMessage={createMessage}
                setEditEl={setEditEl}
                setExpenseName={setExpenseName}
                setExpenseCost={setExpenseCost}
              />
            );
          })}
        </div>
        <div className="mt-7 flex justify-end">
          <span className="text-lg bg-lime-200 text-teal-900 rounded-md p-2">
            총 지출: {totalExpense}원
          </span>
        </div>
      </div>
    </section>
  );
}
