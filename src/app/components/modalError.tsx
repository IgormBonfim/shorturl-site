interface ErrorModalProps {
    message: string;
    onClose: () => void;
  }
  
export default function ErrorModal({ message, onClose }: ErrorModalProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-zinc-900 p-5 rounded shadow-lg w-[500px]">
          <h2 className="text-lg font-bold text-red-600">Erro</h2>
          <p className="text-white">{message}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }
  