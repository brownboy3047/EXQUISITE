const PaymentForm = () => {
  return (
    <div>
      <h2 className="mb-3 font-medium text-base md:text-2xl space-x-2">
        <span>03.</span> <span>Payment method</span>
      </h2>

      <div className=" flex flex-col gap-2 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Card Number</label>
          <input
            type="text"
            placeholder="Enter your card number"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Card Name</label>
          <input
            type="text"
            placeholder="Enter your card name"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-2 md:flex-row md:items-center justify-between mt-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Exp Date</label>
          <input
            type="email"
            placeholder="Enter your exp date"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">CCV</label>
          <input
            type="tel"
            placeholder="Enter your ccv"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
