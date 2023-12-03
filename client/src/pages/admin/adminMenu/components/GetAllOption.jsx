import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Options from "./style/GetAllOption.style";
import { getAllOptions } from "../../../../api/orderOption";
import { actionGetAllOptions } from "../../../../redux/action/orderOptionAction";

const GetAllOption = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const allOptions = useSelector((state) => state.orderOption.options);

  const options = [
    { shot: allOptions.shot },
    { syrup: allOptions.syrup },
    { iceAmount: allOptions.iceAmount },
    { whipping: allOptions.whipping },
    { drizzle: allOptions.drizzle },
    { milk: allOptions.milk },
  ];

  useEffect(() => {
    const fn = async () => {
      try {
        const options = await getAllOptions(token);
        dispatch(actionGetAllOptions(options));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  return (
    <Options.Container>
      {options.map((option, index) => {
        const optionName = Object.keys(option)[0];
        const optionValues = option[optionName];

        return (
          <Options.Content key={index}>
            <p>{optionName}</p>
            <Options.Ul>
              {Array.isArray(optionValues) &&
                optionValues.length > 0 &&
                optionValues.map((data) => (
                  <li>
                    {data.name}({data.price})
                  </li>
                ))}
            </Options.Ul>
          </Options.Content>
        );
      })}
    </Options.Container>
  );
};

export default GetAllOption;
