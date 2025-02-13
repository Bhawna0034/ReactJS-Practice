export function AirPods() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white space-y-4 items-center justify-center max-w-[400px] px-4 py-6 rounded-lg"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <img
          src="./Airpods.avif"
          alt="airpods"
          className="w-[380px] h-[400px] rounded-lg"
        />
        <div className="space-y-3">
          <div className="flex justify-between text-md text-gray-700 font-semibold">
            <h2>Apple AirPods</h2>
            <h2>$95.00</h2>
          </div>
          <p className="text-md text-gray-400 text-justify">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
          <button className="bg-gray-200 w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100 border-none outline-none focus:border-none focus:outline-none">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
