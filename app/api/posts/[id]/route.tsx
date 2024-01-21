import { NextRequest, NextResponse } from "next/server";
import  prisma  from '@/prisma/client';

interface Props{
    params: {id:number}
}


export async function GET(request: NextRequest, {params}: {params: {id:string}}){

//const post = await prisma.post.findUnique({where: {id: parseInt(params.id)}})
const post = await prisma.post.findUnique({where: {id: params.id}})

if(!post)
  return NextResponse.json({error: 'Post No encontrado'}, {status: 404});
return NextResponse.json(post);

}

export async function PUT (request: NextRequest, {params}: {params: {id:string}}){
  const body =  await request.json();
  const post =  await prisma.post.findUnique({where: {id: params.id}})
  
  if (!post)
     return NextResponse.json({error: 'el post no encontrado'}, {status: 400})
  
     const actualizarPost = await prisma.post.update({
        where: {id: post.id},
        data:{
          title : body.title,
          subtitle : body.subtitle,
          excerpt : body.excerpt,
          
           content : body.content
         }
      })
      return NextResponse.json({message:'Post actualizado'}, {status:200});
  
 
}

export async function DELETE (request: NextRequest,{params}: {params: {id: string}})
{

  const post =  await prisma.post.findUnique({where: {id: params.id}})
  if (!post)   
     return NextResponse.json({error: 'Post No encontrado'}, {status: 404});
  
  //Funcionalidad de Borrar
  await prisma.post.delete({where:{id:post.id}}) 
  return NextResponse.json({message: 'Post Borrado'}, {status: 200});
 
 
  
 }