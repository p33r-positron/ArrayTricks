```js
function rev(a)
{
	const l = a.length, m = l-1;
	if(l < 2)return a;
	const np = l%2;
	var r = new Array();
	for(var i = 0 ; i < l/2 ; i++){
		r[i] = a[m-i];
		r[m-i] = a[i];
	}
	return r;
};

function sort(a)
{
  const l = a.length;
  if(!l)return a;
  var w = a[0];
  for(var i = 0 ; i < l ; i++)
    if(a[i] > w)w = a[i];
  return w;
};

function push(a, v)
{
  return a[a.length] = v;
};

function push2(a,v)
{
  const l = a.length;
  a.length++;
  return a[l] = v;
};

function pop(a)
{
  if(!a.length)return a;
  const x = a[a.length-1];
  a.length--;
  return x;
};

function shift(a)
{
  return pop(rev(a));
};

function shift2(a)
{
  var l = a.length;
  if(!l)return a;
  const a2 = new Array(--l);
  for(var i = 0 ; i < l ;)
    a2[i] = a[++i];
  return a2;
};

function unshift(a, v)
{
  return push(rev(a), v);
};

function unshift2(a, v)
{
  var l = a.length;
  const a2 = new Array(++l);
  a2[0] = v;
  for(var i = 1 ; i <= l ; i++)
    a2[i] = a[i-1];
  return a2;
};

function splice(a, p, n)
{
  const l = a.length;
  //wip, brb
};
