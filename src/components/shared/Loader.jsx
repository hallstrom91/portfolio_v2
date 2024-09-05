export default function Loader() {
  return (
    <>
      <div className="bg-neutral-800">
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            src="/loader/loader_try_three.png"
            className="animate-spin rounded-full h-30 w-30"
          />
          <div className="text-bold text-lg pt-2">Laddar...</div>
        </div>
      </div>
    </>
  );
}
