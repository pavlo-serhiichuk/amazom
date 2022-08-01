import React, {useState} from 'react';

const FilterForm = () => {

  const [filter, setFilter] = useState('')


  return (
    <form action="">
        <label>Sort By:&nbsp;</label>
      <select value={filter}>
        <option value="empty">...</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </form>
  );
};

export default FilterForm;

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
//
// enum FilterEnum {
//   lowToHigh = "lowToHigh",
//   highToLow = "highToLow",
// }
//
// interface IFormInput {
//   filter: FilterEnum;
// }
//
// const FilterForm = () => {
//   const { register, handleSubmit } = useForm<IFormInput>();
//
//   const onSubmit: SubmitHandler<IFormInput> = data => {
//     console.log(data)
//   }
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <select {...register("filter")} >
//         <option value="lowToHigh" onClick={() => console.log('clicked')}>Low to High</option>
//         <option value="highToLow">High to Low</option>
//       </select>
//     </form>
//   );
// }
//
// export default FilterForm
