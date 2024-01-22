
/*
GET Obtener
POST Crear
PUT Actualizar
DELETE Borrar


CRUD _ Create, Read, Update, Delete
*/
import React from 'react'

import { NextRequest, NextResponse } from 'next/server';

import  prisma  from '@/prisma/client';
//import { Prisma } from '@prisma/client';


//Peticion GET 
export async function GET (request: NextRequest)
{


   const posts = await prisma?.post.findMany();
   return NextResponse.json(posts);


}

// POST crear un nuevo registro
export async function POST (request: NextRequest)
{
const body =  await request.json();

if (!body.title)
     return NextResponse.json({error: "el titulo del post es obligatorio"}, {status: 404})

    
// Prisma create Producto
    const nuevopost = await prisma.post.create({data:{
       title : body.title,
       subtitle : body.subtitle,
       excerpt : body.excerpt,
       
        content : body.content,
        authorId : body.authorid
    }})
    return NextResponse.json(nuevopost);
}

