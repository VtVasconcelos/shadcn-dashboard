"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Separator } from "@radix-ui/react-menubar";
import { ScrollArea, ScrollAreaCorner, ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import uuid from 'react-uuid';

interface IRow {
    name: string,
    email: string,
    value: number
}

const mockSales = [
    {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    },
    {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }, {
        name: 'Victor Vasconcelos',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    },
    {
        name: 'John Doe.',
        email: 'vts.vasconcelos@gmail.com',
        value: 300
    }
]

function Row({ name, email, value }: IRow) {
    return (
        <div className="flex">
            <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/vtVasconcelos.png" className="rounded-full" alt={name} />
                <AvatarFallback>{name.split(' ')[0].slice(0, 2)}</AvatarFallback>
            </Avatar>

            <HoverCard>
                <div className="ml-4 space-y-1 w-4/5">
                    <HoverCardTrigger className="cursor-pointer">
                        <>
                            <p className="text-sm font-medium leading-none">{name}</p>
                            <p className="text-sm text-muted-foreground">
                                {email}
                            </p>
                        </>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-zinc-900 rounded p-4 border">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/vtVasconcelos.png" className="rounded-full my-3" />
                                <AvatarFallback>{name.split(' ')[0].slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2 py-2">
                                <a href="https://github.com/VtVasconcelos" target="_blank" rel="noopener" className="font-bold underline text-blue-400">{name}</a>
                                <p className="text-sm">
                                    Desenvolvedor Full Stack Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit nam nulla vel
                                </p>
                                <div className="flex items-center pt-2">
                                    <span className="text-xs text-muted-foreground">
                                        Conta criada em 2018
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </div>
            </HoverCard>



            <div className="ml-auto font-medium">R${value},00</div>
        </div>
    )
}

export function Recents() {
    return (
        <div className="">
            <div className="">
                <ScrollArea className="overflow-hidden overflow-y-auto rounded-md flex flex-col space-y-4 max-h-56 px-4 py-4">
                    {mockSales.map(row => (<div key={uuid()}><Row {...row} /><hr /></div>))}
                </ScrollArea>
            </div>
        </div>
    )
}