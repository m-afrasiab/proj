var async = require('async');
var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var wait = require("wait.for");

function requestWaitForWrapper(url, callback) {
  request(url, function(error, response, html) {
    if (error)
      callback(error, response);
    else if (response.statusCode == 200)
      callback(null, html);
    else
      callback(new Error("Status not 200 OK"), response);
  });
}

function readBookInfo(baseUrl, s) {
  var html = wait.for(requestWaitForWrapper, baseUrl + '&s=' + s.toString());
  var $ = cheerio.load(html, {
    xmlMode: true
  });

  return {
    s: s,
    id: $('work').attr('id'),
    total: parseInt($('records').attr('total'))
  };
}

function readWorkInfo(id) {
  var html = wait.for(requestWaitForWrapper, 'http://api.trove.nla.gov.au/work/' + id.toString() + '?key=6k6oagt6ott4ohno&reclevel=full');
  var $ = cheerio.load(html, {
    xmlMode: true
  });

  return {
    title: $('title').text(),
    contributor: $('contributor').text()
  }
}

function main() {
  var baseBookUrl = 'http://api.trove.nla.gov.au/result?key=6k6oagt6ott4ohno&zone=book&l-advformat=Thesis&sortby=dateDesc&q=+date%3A[2000+TO+2014]&l-availability=y&l-australian=y&n=1';
  var baseInfo = readBookInfo(baseBookUrl, 0);

  for (var s = 0; s < baseInfo.total; s++) {
    var bookInfo = readBookInfo(baseBookUrl, s);
    var workInfo = readWorkInfo(bookInfo.id);
    console.log(bookInfo.id + ";" + workInfo.contributor + ";" + workInfo.title);
  }
}

wait.launchFiber(main);