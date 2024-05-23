import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select.jsx";
import { Pagination, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination.jsx";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState([
    { id: 1, item: "T-Shirt", category: "Apparel", stock: 120, price: "$20" },
    { id: 2, item: "Jeans", category: "Apparel", stock: 80, price: "$40" },
    { id: 3, item: "Sneakers", category: "Footwear", stock: 50, price: "$60" },
    { id: 4, item: "Jacket", category: "Apparel", stock: 30, price: "$100" },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Inventory Management Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stock">Stock Levels</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Inventory Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,000</div>
              <p className="text-xs text-muted-foreground">Updated just now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {stockData
                  .filter((item) => item.stock < 50)
                  .map((item) => (
                    <li key={item.id}>
                      {item.item} - {item.stock} left
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stock" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Levels</CardTitle>
              <CardDescription>Manage and track your stock levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <Input type="search" placeholder="Search items..." className="w-1/3" />
                <Select>
                  <SelectTrigger>
                    <span>Filter by Category</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="footwear">Footwear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell>{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination className="mt-4">
                <PaginationPrevious>Previous</PaginationPrevious>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationNext>Next</PaginationNext>
              </Pagination>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Track your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>#12345</TableCell>
                    <TableCell>2023-10-01</TableCell>
                    <TableCell>T-Shirt</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>$200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#12346</TableCell>
                    <TableCell>2023-10-02</TableCell>
                    <TableCell>Jeans</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>$200</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Pagination className="mt-4">
                <PaginationPrevious>Previous</PaginationPrevious>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationNext>Next</PaginationNext>
              </Pagination>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
