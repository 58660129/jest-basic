//matcheer การจับคู่สิ่งนึงกับสิ่งหนึ่ง
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
// toBe || ===

//.tobe  คือ operator ===
//.toEqual object มี value ตามที่คาดหวังไหม เหมือนกันหรือเปล่า
//.tobe คือ เช็ดคว่า มี object เดียวกนไหม
test('two plus two is four', () => {
  var o1 = {name: "ball"}
  var o2 = {name: "ball"}
  var o3 = o1

  expect(o1).toEqual(o2)
  expect(o1).not.toBe(o2)
  expect(o1).toBe(o3)
});

test('two plus two is four', () => {
  var data = {one:1}
  //data.two =2
  data['two']=2
  expect(data).toEqual({one:1, two:2})
});
// Truthy / falsy  0 '' null
test('zero',()=>{
  var n =0
  var m =-1
  var z =1
  expect(n).not.toBeTruthy()
  expect(m).toBeTruthy()
  expect(z).toBe(1)
})


test('object assignment',()=>{
  const data ={one: 1};
  data['two'] = 2;
  expect(data).toEqual({one:1,two:2});
});

test('null',()=>{
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
})
test('zero',()=>{
  const z =0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'papor towels',
  'beer'
];

test('the shopping List has beer on it', () =>{
  expect(shoppingList).toContain('beer');
});
