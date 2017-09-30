function takeANumber( line, name ) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing( line ) {
  if( line.length === 0 ) {
    return "There is nobody waiting to be served!"
  }

  var first = line[0]

  return `Currently serving ${line.shift()}.`
}

function currentLine( line ) {
  if( line.length === 0 ) {
    return "The line is currently empty."
  }

  var newline = "The line is currently: "
  for( let i=1; i <= line.length; i++ ) {
    if( i === line.length ) {
      newline += `${i}. ${line[i-1]}`
    }
    else {
      newline += `${i}. ${line[i-1]}, `
    }
  }

  return newline
}

var line = ["Dan", "John", "Daly"]
console.log(nowServing(line))
console.log(nowServing(line))
console.log(nowServing(line))
