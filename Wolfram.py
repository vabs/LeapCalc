import xmltodict

__author__ = 'Mohit'
import urllib2
import urllib
import httplib
from xml.etree import ElementTree as etree

class wolfram(object):
    def __init__(self, appid):
        self.appid = appid
        self.base_url = 'http://api.wolframalpha.com/v2/query?'
        self.headers = {'User-Agent':None}

    def _get_xml(self, ip):
        url_params = {'input':ip, 'appid':self.appid}
        data = urllib.urlencode(url_params)
        req = urllib2.Request(self.base_url, data, self.headers)
        xml = urllib2.urlopen(req).read()
        return xml

    def _xmlparser(self, xml):
        data_dics = {}
        tree = etree.fromstring(xml)
        #retrieving every tag with label 'plaintext'
        for e in tree.findall('pod'):
            if e.attrib['title']=='Result':
                for ef in list(e):
                    if ef.tag=='subpod':
                        for it in list(ef):
                            if it.tag=='plaintext':
                                data_dics['result']=it.text
            elif e.attrib['title']=='Manipulatives illustration':
                for ef in list(e):
                    if ef.tag=='subpod':
                        for it in list(ef):
                            if it.tag=='img':
                                data_dics['result_img']=it.attrib['src']
            #for item in [ef for ef in list(e) if ef.tag=='subpod']:
             #   for it in [i for i in list(item) if i.tag=='plaintext']:
              #      if it.tag=='plaintext':
               #         data_dics[e.get('title')] = it.text
        return data_dics

    def search(self, ip):
        xml = self._get_xml(ip)
        result_dics = self._xmlparser(xml)
        return result_dics

if __name__ == "__main__":

    w = wolfram('Q4JVAH-996QL3V9A8')
    w.search('1+2')