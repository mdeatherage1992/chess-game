describe('Testing the functionality, this is the game', ()=>{
  it('have working knight piece on edge', ()=>{
    let game = chessGame('knight','h4');
    expect(game).toBe("g6, g2, f5, f3");
  })

  it('have working knight piece not on edge', ()=>{
    let game = chessGame('knight','d5');
    expect(game).toBe("e7, e3, f6, f4, c7, c3, b6, b4");
  })

  it('have working queen piece on edge', ()=>{
    let game = chessGame('queen','h4');
    expect(game).toBe("g3, g5, f2, f6, e1, e7, d8, h1, h2, h3, h5, h6, h7, h8, a4, b4, c4, d4, e4, f4, g4");
  })

  it('have working queen piece not on edge', ()=>{
    let game = chessGame('queen','d5');
    expect(game).toBe("e6, c4, e4, c6, f7, b3, f3, b7, g8, a2, g2, a8, h1, d1, d2, d3, d4, d6, d7, d8, a5, b5, c5, e5, f5, g5, h5");
  })

  it('have working rook piece on edge', ()=>{
    let game = chessGame('rook','h4');
    expect(game).toBe("h1, h2, h3, h5, h6, h7, h8, a4, b4, c4, d4, e4, f4, g4");
  })

  it('have working rook piece not on edge', ()=>{
    let game = chessGame('rook','d5');
    expect(game).toBe("d1, d2, d3, d4, d6, d7, d8, a5, b5, c5, e5, f5, g5, h5");
  })

  it('only accepts valid chess pieces', ()=>{
    expect(function(){
      chessGame('duce','d3')}).toThrow();
    })


  it('only accepts valid board positions(by length)', ()=>{
    expect(function() {
      chessGame('rook','d43')}).toThrow();
  })

  it('only accepts valid board positions(by board)', ()=>{
    expect(function() {
      chessGame('rook','i9')}).toThrow();
    })

})
