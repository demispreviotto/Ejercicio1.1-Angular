import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character-interface';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  public characters: Array<CharacterInterface> = []
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
      }
    })
  }
}
