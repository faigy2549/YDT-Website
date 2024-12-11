using AutoMapper;
using Entities;
using DTOs;

namespace YDT
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<Rav, RavDTO>().ReverseMap();

            CreateMap<Shiur, ShiurDTO>()
                .ForMember(dest => dest.Topic, opt => opt.MapFrom(src => src.Topic))
                .ForMember(dest => dest.Rav, opt => opt.MapFrom(src => src.Rav))
                .ReverseMap();

            CreateMap<Topic, TopicDTO>().ReverseMap();
        }
    }
}
