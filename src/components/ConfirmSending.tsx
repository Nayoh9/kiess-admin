const ConfirmSending = () => {
  return (
    <section className="bg-modalBackground absolute flex h-screen w-screen items-center justify-center ">
      <div className="mb-32 h-44 w-64 bg-slate-500">
        <p className="text-center">Are you sure you want to send this HTML ?</p>

        <div className="mt-10 flex justify-center gap-x-10">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmSending;
