let teams =[
{ id : 1, 
    tname:"Rusty",
    tl:"Dipesh",
    email:"dipesh.4lshi@gmail.com", 
    members : 6,

    id: 2,
    tname:"Convex Pulse ",
    email: "convex@gmail.com",
    members:5,
},//why this cross in name ,it suggest to use anither word as it very commonlt us3d 
];

let nextId=3;


export const getAllTeams = ()=>teams;
export const getTeamsById=(id)=> teams.find((team)=> team.id===id);
export const addTeam = (newTeam)=> {
    const team= {id:nextId++,newTeam};
     team.push(team);
     return team;

     
} ;

export const updateTeamById=(id,updateTeam)=> {
    const team=getTeamsById(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
}; 

export const deleteTeam =(id)=> {
    const index = teams.findIndex((team)=> team.id===id)
    if(index==-1)
        return false;
    teams.splice(index,1);
    return true ;
};