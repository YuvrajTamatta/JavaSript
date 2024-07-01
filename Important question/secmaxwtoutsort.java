public class secmaxwtoutsort {
    public static void main(String[] args) {
        int num[]={2,5,9,40,70,90,80};
        int max=Integer.MIN_VALUE;
        int secmax=Integer.MAX_VALUE;

        for(int i=0; i<num.length; i++){
            if(num[i]>max){
                secmax=max;
                max=num[i];
            }else if(num[i]>secmax && num[i]!=max){
                secmax=num[i];
            }
        }
        System.out.println(secmax);
    }
    
}
