const ContactForm = () => {
  return (
    <div>
      <h2 className="mb-3 font-medium text-base md:text-2xl space-x-2">
        <span>01.</span> <span>Contact information</span>
      </h2>

      <div className=" flex flex-col gap-2 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row md:items-center justify-between mt-3">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm">Phone Number</label>
          <input
            type="tel"
            placeholder="phone number"
            className="border w-full md:w-[300px] rounded-md py-2 px-3 outline-none placeholder:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
