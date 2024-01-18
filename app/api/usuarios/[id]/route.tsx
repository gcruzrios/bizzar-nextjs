import { NextRequest, NextResponse } from "next/server";
import  prisma  from '@/prisma/client';

interface Props{
    params: {id:number}
}


export async function GET(request: NextRequest, {params}: {params: {id:string}}){

const usuario = await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})

if(!usuario)
  return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
return NextResponse.json(usuario);


//  si el id es mayor a 100 entonces error
// if(params.id > 10)
//     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
// // si es menor a 10
// return NextResponse.json({id:1, name:"Greivin"})
}

export async function PUT (request: NextRequest, {params}: {params: {id:string}}){
  const body =  await request.json();
  const usuario =  await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})
  
  if (!usuario)
     return NextResponse.json({error: 'el usuario no encontrado'}, {status: 400})
  
     const actualizarUsuario = await prisma.usuario.update({
        where: {id: usuario.id},
        data:{
         nombre : body.nombre,
         email : body.email 
         }
      })
      return NextResponse.json(actualizarUsuario, {status:200});
  
  // if (!body.nombre) 
  //     return NextResponse.json({error: 'el nombre de usuario es obligatorio'}, {status: 400})    
  // if (params.id > 10) 
  //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
  //return NextResponse.json({id:1, name: body.name});
}


export async function DELETE (request: NextRequest,{params}: {params: {id: string}})
{

  const usuario =  await prisma.usuario.findUnique({where: {id: parseInt(params.id)}})
  if (!usuario)   
     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
  
  //Funcionalidad de Borrar
  await prisma.usuario.delete({where:{id:usuario.id}}) 
  return NextResponse.json({message: 'Usuario Borrado'}, {status: 200});
 
 
  // if (params.id > 10) 
  //     return NextResponse.json({error: 'Usuario No encontrado'}, {status: 404});
  //     return NextResponse.json({message: 'Usuario Borrado'});
 }