interface ConfirmSendingProps {
  // Attend en paramètre un booléen et ne retourne rien
  setOpen: (value: boolean) => void;
  disable: boolean;
}

const ConfirmSending: React.FC<ConfirmSendingProps> = ({
  setOpen,
  disable,
}: ConfirmSendingProps) => {
  const handleModalOpen = () => {
    setOpen(false);
  };
  return (
    <section className="absolute top-0 flex h-screen w-screen items-center justify-center bg-modalBackground ">
      <div className="mb-32 h-44 w-64 bg-slate-500">
        <p className="text-center">
          Are you sure you want to send this newsletter ?
        </p>
        <div className="mt-10 flex justify-center gap-x-10">
          <button type="submit" disabled={disable}>
            Yes
          </button>
          <button type="button" onClick={handleModalOpen}>
            No
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmSending;
