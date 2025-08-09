import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    image: '/placeholder.svg?height=80&width=80&text=SJ',
    rating: 5,
    text: 'The quality of craftsmanship is absolutely incredible. Each piece I\'ve purchased has become a conversation starter in my home. The attention to detail is unmatched.'
  },
  {
    name: 'Michael Chen',
    role: 'Art Collector',
    image: '/placeholder.svg?height=80&width=80&text=MC',
    rating: 5,
    text: 'I\'ve been collecting handcrafted items for over 20 years, and Craft & Style consistently delivers authentic, high-quality pieces. Their artisan network is exceptional.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Home Enthusiast',
    image: '/placeholder.svg?height=80&width=80&text=ER',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and products that exceed expectations every time. I love supporting artisans through this platform.'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the joy of authentic handcrafted products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-amber-400 mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
