import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      user: 'Stalin',
      location: 'Chennai',
      rating: 5,
      feedback: 'Excellent service! Very professional and traditional.',
      avatar: 'assets/assets/1.svg'
    },
    {
      user: 'Priya',
      location: 'Salem',
      rating: 4,
      feedback: 'Good experience, will recommend to others.',
      avatar: 'assets/assets/2.svg'
    },
    {
      user: 'Ravi',
      location: 'Coimbatore',
      rating: 5,
      feedback: 'Very satisfied with the pooja arrangements.',
      avatar: 'assets/assets/1.svg'
    },
    {
      user: 'Meena',
      location: 'Madurai',
      rating: 3,
      feedback: 'Service was good but can improve timing.',
      avatar: 'assets/assets/1.svg' // changed to kalasam logo
    },
    {
      user: 'Suresh',
      location: 'Trichy',
      rating: 5,
      feedback: 'Authentic and well-organized pooja.',
      avatar: 'assets/assets/1.svg'
    },
    {
      user: 'Lakshmi',
      location: 'Erode',
      rating: 4,
      feedback: 'Nice experience overall.',
      avatar: 'assets/assets/1.svg' // changed to kalasam logo
    }
  ];

  newTestimonial: Testimonial = {
    user: '',
    location: '',
    rating: 0,
    feedback: '',
    avatar: 'assets/assets/1.svg'
  };

  hoverRating = 0;

  get topTestimonials(): Testimonial[] {
    return this.testimonials
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }

  setRating(rating: number) {
    this.newTestimonial.rating = rating;
  }

  addTestimonial() {
    if (
      this.newTestimonial.user &&
      this.newTestimonial.location &&
      this.newTestimonial.rating &&
      this.newTestimonial.feedback
    ) {
      this.testimonials.unshift({ ...this.newTestimonial });
      // Reset form
      this.newTestimonial = {
        user: '',
        location: '',
        rating: 0,
        feedback: '',
        avatar: 'assets/assets/1.svg'
      };
    }
  }
}
