import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true
})
export class MyCounter {
  @State() contador = 0;
  @Prop() avisar: number;

  increase() {
    this.contador++;
  }

  decrease() {
    this.contador--;
  }

  render() {
    let aviso = null;

    if (this.contador > this.avisar) {
      aviso = <p>O contador é maior que {this.avisar}</p>
    }

    return <div>
      <p>Contador {this.contador}</p>
      <button onClick={this.increase.bind(this)}>+</button>
      <button onClick={this.decrease.bind(this)}>-</button>

      {aviso}
    </div>;
  }
}
