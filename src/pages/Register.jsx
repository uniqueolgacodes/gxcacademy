import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Register = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="registerPage">
        <div className="register">
          <section className="p-6 dark:bg-[#2A102E] dark:text-gray-50">
            <form
              novalidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-[#2D2A2A]">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-extrabold text-2xl pb-7">
                    Personal Information
                  </p>
                  <p className="text-xs">
                    Signup and kickstart your development experience!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="number" className="text-sm">
                      Phone Number
                    </label>
                    <input
                      id="number"
                      type="number"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="state" className="text-sm">
                      State / Province
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="">
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <InputLabel id="label"  sx={{ width: "100%" }}>
                        Please Select Course
                      </InputLabel>
                      <Select
                        labelId="label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{backgroundColor:'white', width:"500px", overflow:"visible"}}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Web Development {"(Front End)"}</MenuItem>
                        <MenuItem value={20}>Web Development {"(Back End)"}</MenuItem>
                        <MenuItem value={30}>Web Development {"(Full Stack)"}</MenuItem>
                        <MenuItem value={40}>SEO Skill {"(Full Stack)"}</MenuItem>
                        <MenuItem value={50}>App Development {"(Full Stack)"}</MenuItem>
                        <MenuItem value={60}>App Development {"(Full Stack)"}</MenuItem>
                      </Select>
                      <FormHelperText sx={{color:'white', width:"500px"}}>Please select desired course</FormHelperText>
                    </FormControl>
                  </div>
                </div>
              </fieldset>

              <button
                type="button"
                className="px-8 py-3 font-semibold border rounded dark:border-gray-100 hover:dark:bg-gray-100 hover:dark:text-black dark:text-gray-100"
              >
                Register
              </button>
            </form>
          </section>
        </div>

        <div className="login"></div>
      </div>
    </>
  );
};

export default Register;
