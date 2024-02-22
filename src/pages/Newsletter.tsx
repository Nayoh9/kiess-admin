//BaseURL import
import baseURL from "../baseURL";

//Package import
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import ConfirmSending from "../components/ConfirmSending";

const Newsletter = () => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  // Function to send the form
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    setDisable(true);

    interface ApiResponse {
      data: String;
    }

    console.log("prout");

    try {
      const response: ApiResponse = await axios.post(`${baseURL}/newsletter`, {
        htmlText: value,
      });
      alert(response.data);

      location.reload();
    } catch (error) {
      console.log({ message: error });
    }
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleModalOpen = (): void => {
    if (!value) {
      return alert("please fill the textarea");
    } else {
      setOpen(true);
    }
  };

  return (
    <section className=" h-screen bg-slate-600">
      <Link to={"/"}>
        <p className="pl-5">Back</p>
      </Link>

      <h1 className="mb-10 text-center">Newsletter to send</h1>

      <div className="mt-40">
        <div className="flex items-center justify-center">
          <a
            href="https://codebeautify.org/htmlviewer"
            target="blank"
            className="w-fit"
          >
            <p className=" text-center text-xl text-white underline">
              Online HTML preview here
            </p>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" mt-4 flex flex-col items-center justify-center"
        >
          <textarea
            name="htmlInput"
            placeholder="Enter HTML and inline style here"
            onChange={handleTextArea}
            className=" h-96 w-3/4 resize-none"
          ></textarea>
          <button
            type="button"
            className="mx-auto mt-4 rounded-lg bg-black p-2 text-white"
            onClick={handleModalOpen}
          >
            Send Newsletter
          </button>
          {open && <ConfirmSending setOpen={setOpen} disable={disable} />}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
