import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      name: 'Ganapathy Homam',
      doc: 'assets/docs/doc1.pdf',
      description: 'A ritual to invoke Lord Ganesha for removing obstacles.',
      why: 'To ensure success and remove hurdles before starting new ventures.',
      meaning: 'Ganapathy means Ganesha, Homam means fire ritual.'
    },
    {
      name: 'Grahapravesham',
      doc: 'assets/docs/doc2.pdf',
      description: 'A ceremony performed before entering a new house.',
      why: 'To purify the home and seek blessings for prosperity and happiness.',
      meaning: 'Graha means house, Pravesham means entry.'
    },
    {
      name: 'Vastu Shanti',
      doc: 'assets/docs/doc3.pdf',
      description: 'A ritual to remove Vastu Dosha (architectural defects).',
      why: 'To bring peace, harmony, and positive energy to the home.',
      meaning: 'Vastu means dwelling, Shanti means peace.'
    },
    {
      name: 'Navagraha Homam',
      doc: 'assets/docs/doc4.pdf',
      description: 'A fire ritual to appease the nine planetary deities.',
      why: 'To reduce the negative effects of planets and improve fortune.',
      meaning: 'Nava means nine, Graha means planets.'
    },
    {
      name: 'Sudarshana Homam',
      doc: 'assets/docs/doc5.pdf',
      description: 'A ritual to invoke Lord Sudarshana for protection and health.',
      why: 'To remove evil forces and ensure well-being.',
      meaning: 'Sudarshana is the divine discus of Lord Vishnu.'
    },
    {
      name: 'Maha Mrityunjaya Homam',
      doc: 'assets/docs/doc6.pdf',
      description: 'A powerful ritual for health and longevity.',
      why: 'To overcome illness and fear of untimely death.',
      meaning: 'Maha means great, Mrityunjaya means conqueror of death.'
    },
    {
      name: 'Rutu Punyahavachanam',
      doc: 'assets/docs/doc7.pdf',
      description: 'A purification ritual performed periodically.',
      why: 'To cleanse and purify the environment and self.',
      meaning: 'Rutu means season, Punyahavachanam means purification.'
    },
    {
      name: 'Sathya Narayana Pooja',
      doc: 'assets/docs/doc8.pdf',
      description: 'A special pooja for Lord Vishnu for prosperity and happiness.',
      why: 'To fulfill wishes and bring peace to the family.',
      meaning: 'Sathya means truth, Narayana is Lord Vishnu.'
    },
    {
      name: 'Varalakshmi Vratam',
      doc: 'assets/docs/doc9.pdf',
      description: 'A pooja to worship Goddess Lakshmi for wealth and well-being.',
      why: 'To seek blessings for prosperity and family welfare.',
      meaning: 'Vara means boon, Lakshmi is the goddess of wealth.'
    },
    {
      name: 'Navaratri',
      doc: 'assets/docs/doc10.pdf',
      description: 'A festival celebrating the divine feminine (Devi).',
      why: 'To honor the goddess and seek her blessings for strength and wisdom.',
      meaning: 'Nava means nine, Ratri means nights.'
    }
  ];
  hoveredService: any = null;
}
