//Get visible expenses
//show expenses based on the filters
export default ( expenses, {text, sortBy, startDate, endDate} ) => {

    return expenses.filter( (expense) => {      //filter is the array function here.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;              //textMatch is to check if the description of expense has the word that contains the text passed by the user.
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;

        return textMatch && startDateMatch && endDateMatch;     //if both are true, then the expense is included in the new array.
    }).sort( ( a, b ) => {            //sort is chained coz expenses have to be sorted based on date or amount.
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;     //if b expense has to be on the top, toss 1, else -1.
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1 ;
        }
    }) ;
    
}