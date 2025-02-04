import { useEffect } from "react";

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

export default function ErrorModal({ message, onClose }: ErrorModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-message"
      tabIndex={-1}
    >
      <div className="bg-zinc-900 p-5 rounded shadow-lg w-[500px]">
        <h2 id="modal-title" className="text-lg font-bold text-red-600">
          Erro
        </h2>
        <p id="modal-message" className="text-white">
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          aria-label="Fechar modal de erro"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
