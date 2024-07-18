const ShoppingForm = () => {
  return (
    <div>
      <h2 className="mb-3 font-medium text-base md:text-2xl space-x-2">
        <span>02.</span> <span>Shopping Details</span>
      </h2>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className="border w-full md:w-[650px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
        />
      </div>

      <div className=" flex flex-col gap-2 md:flex-row md:items-center justify-between mt-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">State/Province</label>
          <input
            type="text"
            placeholder="Enter your state/province"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-2 md:flex-row md:items-center justify-between mt-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">City</label>
          <input
            type="email"
            placeholder="Enter your city"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Postal Code</label>
          <input
            type="tel"
            placeholder="Enter postal code"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingForm;
