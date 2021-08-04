const filterHandler = (event, employees, changeHandler) => {
  const filterEmployees = employees.filter((employee) => {
    const employeeNameLowerCase = employee.firstname.toLowerCase();
    const queryLowerCase = event.target.value.toLowerCase();
    return employeeNameLowerCase.includes(queryLowerCase);
  });

  changeHandler({ firstname: "filterEmployees", value: filterEmployees });
  changeHandler({ firstname: "filterValue", value: event.target.value });
};

export { filterHandler };
