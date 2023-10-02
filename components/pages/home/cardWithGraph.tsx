'use client';
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    {
        revenue: 10400,
        subscription: 240,
    },
    {
        revenue: 14405,
        subscription: 300,
    },
    {
        revenue: 9400,
        subscription: 200,
    },
    {
        revenue: 8200,
        subscription: 278,
    },
    {
        revenue: 7000,
        subscription: 189,
    },
    {
        revenue: 9600,
        subscription: 239,
    },
]

export default function CardWithGraph() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-normal">Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                </p>
                <div className="mt-4 h-[80px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Bar
                                dataKey="subscription"
                                className="fill-current"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}