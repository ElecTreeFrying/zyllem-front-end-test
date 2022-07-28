import { trigger, style, animate, transition, state } from '@angular/animations';

export const opacityFade = (speed: number = 300) => trigger(
  'opacityFade',
  [
    state(
      'void',
      style({ opacity: 0 })
    ),
    state(
      '*',
      style({ opacity: 1 })
    ),
    transition(
      'void => *', 
      [
        animate(`${speed}ms ease-out`)
      ]
    ),
    transition(
      '* => void', 
      [
        animate(`${speed}ms ease-out`)
      ]
    )
  ]
);

export const opacityFadeIn = (speed: number = 300) => trigger(
  'opacityFadeIn',
  [
    state(
      'void',
      style({ opacity: 0 })
    ),
    state(
      '*',
      style({ opacity: 1 })
    ),
    transition(
      'void => *', 
      [
        animate(`${speed}ms ease-out`)
      ]
    )
  ]
);
