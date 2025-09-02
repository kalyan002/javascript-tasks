let age=pavan;
try {
    if (age <=0)
    {
        throw new "age cannot be negative or zero"
    }
    else if (isNaN(age))
    {
        throw new "age must be in number"
    }
    else{
        console.log("age is valid" )
    }
} catch (error) {
    console.log("find the error:", error.message);
}