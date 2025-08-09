"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="jewelry" />
            <Label htmlFor="jewelry">Jewelry</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pottery" />
            <Label htmlFor="pottery">Pottery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="textiles" />
            <Label htmlFor="textiles">Textiles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="woodwork" />
            <Label htmlFor="woodwork">Woodwork</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="glassware" />
            <Label htmlFor="glassware">Glassware</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="wood" />
            <Label htmlFor="wood">Wood</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="metal" />
            <Label htmlFor="metal">Metal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ceramic" />
            <Label htmlFor="ceramic">Ceramic</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="glass" />
            <Label htmlFor="glass">Glass</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="fabric" />
            <Label htmlFor="fabric">Fabric</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
