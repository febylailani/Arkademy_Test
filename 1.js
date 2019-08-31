function getdata(){
let biodata = {      
  name: "Raden Ajeng Feby Lailani Belladina",  //name (String)
  age: 22 , //age (Number)
  address: "Jalan Sanggar Kencana X No. 23, Bandung", //address (String)
  hobbies: [ "Photography", "Writing", "Reading", "Travelling", "Blogging"], //hobbies (Array)
  is_married: false, //is_married (Boolean)
  list_school : [  
    { 
      school_name : "Bina Nusantara University", 
      year_in : 2018, 
      year_out : 2020,
      major : "Industrial Engineering",
    },
    {
      school_name : "Politeknik Negeri Bandung" ,
      year_in : 2013 , 
      year_out : 2016 ,
      major : "Chemical Engineering" ,
    },
    {
      school_name : "SMAN 1 Garut" , 
      year_in : 2011 , 
      year_out : 2013 ,
      major : "Natural Science" ,
    },
    {
      school_name : "SMPN 1 Garut" , 
      year_in : 2008 , 
      year_out : 2011 ,
      major : null ,
    },
    {
      school_name : "SDN Kota Kulon V Garut" , 
      year_in : 2002 , 
      year_out : 2008 ,
      major : null },
    ],
 list_skills : [  
    { 
      skill_name : "Explosive handling in oil and gas industry",
      level : "Expert", 
    },
    {
      skill_name : "Microsoft office",
      level : "Advanced",
    },
    {
      skill_name : "Adobe Premiere Pro",
      level : "Advanced",
    },
    {
      skill_name : "C++",
      level : "Beginner",
    },
    {
      skill_name : "JS",
      level : "Beginner",
    },
   ],
  interest_in_coding: true,
  }
return biodata;
}
console.log(getdata())
