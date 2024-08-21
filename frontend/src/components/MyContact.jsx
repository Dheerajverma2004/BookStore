import React from "react";

const MyContact = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center text-xl">
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 dark:bg-slate-600 dark:text-white ">
          <div className="flex mt-14 justify-center">
            <form>
              <h3 className="font-bold text-lg">Connect Us!</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="enter your fullname"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
              </div>
              <div>
                <span>Message</span>
                <br/>
                <textarea
                  className="w-80 h-32 px-3 border rounded-md outline-none"
                  placeholder="write your message here"
                />
                <br />
                <div className="mt-4">
                <button type="submit" className="text-sm w-20 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Submit
                </button>
              </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyContact;
