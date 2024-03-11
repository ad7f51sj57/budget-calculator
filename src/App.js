import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [message, setMessage] = useState([]);
  const [editEl, setEditEl] = useState(null);

  const createMessage = (isSuccess, text) => {
    const newMEssage = {
      id: Date.now(),
      message: text,
      isSuccess: isSuccess,
    };
    setMessage((prevMessage) => [...prevMessage, newMEssage]);
    setTimeout(() => {
      setMessage((prevArray) => prevArray.slice(1));
    }, 2000);
  };

  const editMode = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editEl.id
          ? { ...item, name: expenseName, cost: expenseCost }
          : item
      )
    );

    setExpenseName("");
    setExpenseCost("");
    setEditEl(null);
    createMessage(true, "수정 되었습니다.");
  };

  const submitMode = () => {
    let newItem = {
      id: Date.now(),
      name: expenseName,
      cost: expenseCost,
    };

    setItems((prev) => [...prev, newItem]);
    setExpenseName("");
    setExpenseCost("");
    createMessage(true, "등록 했습니다.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editEl) {
      editMode();
      return;
    }
    if (expenseName === "" || expenseCost === "") {
      createMessage(false, " 모든 항목을 입력해 주세요.");
      return;
    }

    submitMode();
  };

  let totalExpense = 0;
  items.forEach((item) => {
    totalExpense += parseFloat(item.cost);
  });

  const handleAllRemove = () => {
    createMessage(true, "모두 삭제되었습니다.");

    totalExpense = 0;
    setItems([]);
  };

  return (
    <main>
      <h1 className="text-2xl text-white font-semibold p-5 bg-teal-900">
        BUDGET CALCULATOR
      </h1>
      {message.length > 0 &&
        message.map((item) => (
          <p
            key={item.id}
            className={`p-2 mb-2 ${
              item.isSuccess
                ? "bg-lime-200 text-teal-900 rounded-md"
                : "bg-red-200 text-red-900"
            }`}
          >
            {item.message}
          </p>
        ))}

      <section className="px-8 pb-5 pt-8">
        <ExpenseForm
          handleSubmit={handleSubmit}
          expenseName={expenseName}
          setExpenseName={setExpenseName}
          expenseCost={expenseCost}
          setExpenseCost={setExpenseCost}
          editEl={editEl}
        />
      </section>
      <ExpenseList
        items={items}
        setItems={setItems}
        totalExpense={totalExpense}
        handleAllRemove={handleAllRemove}
        createMessage={createMessage}
        setEditEl={setEditEl}
        setExpenseName={setExpenseName}
        setExpenseCost={setExpenseCost}
      />
    </main>
  );
}

export default App;
