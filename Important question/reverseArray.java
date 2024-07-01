import java.lang.reflect.Array;
import java.util.Arrays;

public class reverseArray {
public static void main(String[] args) {
    int id[]={1,4,9,5,3,10};
    int start=0;
    int end=id.length-1;
    while(start<end){
        int temp = id[start];
        id[start]=id[end];
        id[end]=temp;
        start++;
        end--;
    }
    System.out.println(Arrays.toString(id));
}
}
