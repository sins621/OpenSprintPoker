import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'

export const Route = createFileRoute('/demo/storybook')({
  component: StorybookDemo,
})

function StorybookDemo() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [employmentType, setEmploymentType] = useState('full-time')
  const [coffeeCups, setCoffeeCups] = useState([3])

  const handleSubmit = () => {}

  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setEmploymentType('full-time')
    setCoffeeCups([3])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Employee Information Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Employment Type</Label>
                <RadioGroup
                  value={employmentType}
                  onValueChange={setEmploymentType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time" className="font-normal cursor-pointer">
                      Full Time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time" className="font-normal cursor-pointer">
                      Part Time
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="coffeeCups">Coffee Cups Per Day</Label>
                  <span className="text-sm font-semibold">{coffeeCups[0]}</span>
                </div>
                <Slider
                  id="coffeeCups"
                  value={coffeeCups}
                  onValueChange={setCoffeeCups}
                  min={0}
                  max={10}
                  step={1}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" variant="default" onClick={handleSubmit}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
