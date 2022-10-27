function Error({ children }) {
  return (
    <div className="text-center font-bold bg-red-600 text-white my-4 uppercase">
      {children}{" "}
    </div>
  );
}

export default Error;
