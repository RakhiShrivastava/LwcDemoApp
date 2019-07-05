public with sharing class MyContact {
   
    @AuraEnabled(cacheable=true)    
    public static List<Contact> getContactList() {
         System.debug('contactList: started');
        List<Contact> contactList = [SELECT Id, Name,FirstName,LastName, Phone, Email FROM Contact Where Email != null Order by CreatedDate desc LIMIT 5];
        System.debug('contactList: '+contactList);
        return contactList;
    }
     @AuraEnabled(cacheable=true)    
    public static List<Contact> searchContacts(string searchKey) 
    { 
        System.debug('searchContacts: started=> '+searchKey);
         List<Contact> searchContactsResult=new  List<Contact>();
         if(searchKey!=null && searchKey!=''){
            string searchName ='%'+searchKey+'%';  
              System.debug('searchContacts: searchName=> '+searchName);      
            searchContactsResult = [SELECT Id, Name,FirstName,LastName, Phone, Email FROM Contact Where Name Like :searchName];
        System.debug('searchContactsResult: '+searchContactsResult);
         }
        return searchContactsResult;
    }
}
